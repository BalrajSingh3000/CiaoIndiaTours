import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, MapPin, Airplane } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/hooks/use-toast';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuotationModal = ({ isOpen, onClose }: QuotationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    selectCategory: 'Single',
    numberOfParticipants: '2',
    arrivalDate: '',
    departureDate: '',
    budget: '',
    hotelType: '',
    comments: ''
  });

  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const countryCodes = [
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
  ];

  const hotelTypes = [
    'B&B, Homestay guesthouse',
    'Comfortable hotels',
    '4 star hotels',
    '5 star hotels'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        category: formData.selectCategory,
        numberOfTourist: formData.numberOfParticipants,
        dep: formData.departureDate ? new Date(formData.departureDate) : null,
        arr: formData.arrivalDate ? new Date(formData.arrivalDate) : null,
        hotel_type: formData.hotelType,
        budget: formData.budget,
        comment: formData.comments,
      };

      const { error } = await supabase.from('Quotation Form').insert(payload);
      if (error) throw error;

      toast({ title: 'Quote requested', description: 'We will reach out within 24 hours.' });
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        selectCategory: 'Single',
        numberOfParticipants: '2',
        arrivalDate: '',
        departureDate: '',
        budget: '',
        hotelType: '',
        comments: ''
      });
    } catch (err: any) {
      toast({ title: 'Submission failed', description: err.message ?? 'Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      selectCategory: 'Single',
      numberOfParticipants: '2',
      arrivalDate: '',
      departureDate: '',
      budget: '',
      hotelType: '',
      comments: ''
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="fixed bottom-1 fixed right-1  z-50 max-h-[90vh] overflow-y-auto"

          >
            <div className="glass-card p-8 rounded-2xl max-w-2xl w-full mx-4 border border-white/20">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-semibold text-foreground mb-2"
                >
                  Request Your Quote
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground font-light"
                >
                  Tell us about your dream journey and we'll create a personalized itinerary just for you
                </motion.p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} 
              className="grid md:grid-cols-4 gap-x-4 gap-y-10">
                {/* Row 1: Name, Email, Phone, Age */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm text-foreground text-left mb-1 ml-2">Name</label>
                  <Input
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-white/20 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm text-foreground text-left mb-1 ml-2">Email</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-white/20 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm text-foreground text-left mb-1 ml-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/50 border-white/20 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm text-foreground text-left mb-1 ml-2">Age</label>
                  <Input
                    placeholder="—Your Age—"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="bg-background/50 border-white/20 text-foreground placeholder:text-muted-foreground"
                  />
                </motion.div>

                {/* Row 2: Select Category, numberOfParticipants, Budget, Arrival */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <label className="absolute -top-6 left-2 text-sm text-foreground">Category</label>
                  <Select value={formData.selectCategory} onValueChange={(value) => setFormData({ ...formData, selectCategory: value })}>
                    <SelectTrigger className="bg-background/50 border-white/20 text-foreground">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-background/95 backdrop-blur-xl border-white/20">
                      {["Single", "Couple", "Family", "Friends", "Group"].map((label) => (
                        <SelectItem key={label} value={label} className="text-foreground hover:bg-white/10">
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <label className="absolute -top-6 left-2 text-sm text-foreground">No. Of Tourist</label>
                  <Select value={formData.numberOfParticipants} onValueChange={(value) => setFormData({ ...formData, numberOfParticipants: value })}>
                    <SelectTrigger className="bg-background/50 border-white/20 text-foreground">
                      <SelectValue placeholder="No. Of Participants" />
                    </SelectTrigger>
                    <SelectContent className="bg-background/95 backdrop-blur-xl border-white/20">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()} className="text-foreground hover:bg-white/10">
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                {/** Dep DATE box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="relative"
                >
                  <label className="absolute -top-6 left-2 text-sm text-foreground">Dep:</label>
                  <Input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    value={formData.departureDate}
                    onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                    className="bg-background/50 border-white/20 text-foreground"
                  />
                </motion.div>

                {/* ARR DATE box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <label className="absolute -top-6 left-2 text-sm text-foreground">Arr:</label>
                  <Input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    value={formData.arrivalDate}
                    onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                    className="bg-background/50 border-white/20 text-foreground"
                  />
                </motion.div>

                

                {/* Budget box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative mt-6" // add this line
                >
                  <label className="absolute -top-6 left-2 text-sm text-foreground">Budget</label>
                  <Input
                    placeholder="Your Budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="bg-background/50 border-white/20 text-foreground placeholder:text-muted-foreground"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="md:col-span-2"
                >
                  <label className="block text-sm text-foreground mb-1">Comment:</label>
                  <Textarea
                    placeholder="Additional comments or special requests..."
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="bg-background/50 border-white/20 text-foreground placeholder:text-muted-foreground min-h-[80px]"
                  />
                </motion.div>

                {/* Row 3: Hotel type, Departure date, Comment (spans 2 cols) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm text-foreground mb-1">Hotel type:</label>
                  <div className="space-y-2">
                    {hotelTypes.map((type) => (
                      <label key={type} className="flex items-center space-x-2 text-sm">
                        <input
                          type="radio"
                          name="hotelType"
                          value={type}
                          checked={formData.hotelType === type}
                          onChange={(e) => setFormData({ ...formData, hotelType: e.target.value })}
                          className="text-primary"
                        />
                        <span className="text-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>

                {/* Submit Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="md:col-span-4 flex justify-center gap-4 mt-4"
                >
                  <Button type="submit" disabled={submitting} className="neumorphic-btn text-primary-foreground hover:shadow-glow px-8 py-4 text-lg w-40">
                    {submitting ? 'Submitting...' : 'Submit'}
                  </Button>
                  <Button type="button" onClick={handleReset} variant="outline" className="border-white/20 text-foreground hover:bg-white/10 px-8 py-4 text-lg w-40">
                    RESET
                  </Button>
                </motion.div>

                {/* Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="md:col-span-4 text-center text-sm font-light mt-2 glow-text text-white-900"
                >
                  We'll respond with your personalized quote within 24 hours
                </motion.p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuotationModal;