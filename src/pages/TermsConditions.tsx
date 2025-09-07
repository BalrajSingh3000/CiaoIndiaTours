import { motion } from 'framer-motion';
import { ArrowLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card/20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-4"
          >
            Terms & Conditions
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 rounded-2xl"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              The terms and conditions of booking with Ciao India Tours are listed below.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Reservation</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              All reservations must be received in writing via email or fax. Reservations are finalized upon receipt of payment (Sent by the Ciao India Tours team) and receipt of the information form. All other details are mentioned below.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Passport and Visa</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              All foreign nationals entering India are required to possess a valid international travel document in the form of a national passport with a valid visa obtained from an Indian mission or post abroad. For more information kindly visit the link. All passports must be validated at least 6 months after the date of departure to India. Fines, sanctions, payments or expenses incurred as a result of non-regularization of these documents will be the responsibility of the customer. The Ciao India Tours team or Ciao India Tours have no responsibility for completing the above documents.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Insurance</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Ciao India Tours recommends that you take out personal travel insurance. The Ciao India Tours team does not provide travel insurance.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Payment</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              An invoice will be raised after receiving confirmation of services from the traveler with a wire transfer request transferring the full payment to our bank account in India. For contracted services, a minimum deposit of 25% of the total cost must be paid to M/s Ciao India Tours. The deposit is required to hold the reservation on a confirmed basis.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Balance Payment</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              The balance is due 30 days before the start date of the services. Any booking made within 30 working days of the date of services will be deemed to be a late booking and for the same full and final payment shall be made at the time of booking.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">Note:</h3>
            <ul className="space-y-2 text-muted-foreground font-light mb-8">
              <li>• In addition to the above, in case of bookings for luxury train travel, hotel or resort bookings during peak season (X-Mas, New Year, Pushkar Fair, Diwali etc.), full payment must be made at time of booking.</li>
              <li>• Full payment from Nepal, Bhutan and Sri Lanka is required in advance.</li>
              <li>• Full payment for domestic or international flight tickets is required in advance.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Payment Methods</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              International customers can make payment using one of the following methods: – With the Gateway online payment system or by bank transfer to our bank account
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">Note:</h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              All payments must be free and free from any withholding tax and deduction. Bank charges, if any, for remittance (by bank remittance or from an intermediary bank) would be strictly borne by the payer.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Policy regarding Cancellation / NO SHOW / EARLY Departure</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              In case of cancellation of tour / travel services due to any avoidable / unavoidable reason, we must be informed in writing. Cancellation charges would be effective from the date we receive a message in writing and cancellation charges would be as follows.
            </p>

            <h3 className="text-xl font-medium text-foreground mb-3">Cancellation:</h3>
            <ul className="space-y-3 text-muted-foreground font-light mb-8">
              <li>• <strong>Cancellations more than 30 days before the departure date:</strong> 50% of the deposit will be refunded after deduction: bank charges (€20), booking fee (€45), flight cancellation (€20 per person and 100% of the cost be deducted) and the current cost of train tickets.</li>
              <li>• <strong>Cancellations less than 30 days before departure:</strong> 100% cancellation fee. Ciao India Tours keeps 100% of the cost of the trip.</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3">Note:</h3>
            <ul className="space-y-2 text-muted-foreground font-light mb-8">
              <li>• Regardless of the above cancellation plates – in case of cancellation of tour/travel services after booking made with us – a minimum service charge of 10% will be applied.</li>
              <li>• In case of canceling the trip after it has started, the refund would be limited to a limited amount which also depends on the amount we could recover from the hoteliers, airlines and suppliers we protect ourselves. For unused hotel facilities, transportation of rentals and missed meals, etc. We are not responsible for refund.</li>
              <li>• In case of a special train journey (such as Palace on Wheels, Royal Rajasthan on Wheels, Deccan Odyssey, Golden Chariot, Indian Maharaja and Maharajas Express), a separate cancellation policy is applicable (recommended as and when required).</li>
              <li>• If the booking for the subsequent period is cancelled, due to any reason, no refund will be made for such cancellation.</li>
              <li>• High Season Bookings (20th December to 15th January) Festival Period Bookings (Festivals like -Diwali, Dussehra, Holi, Pushkar and so on). Reservations long weekend.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Refund</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Regarding the refund of unused/unused services (which are paid and canceled in advance), the refund amount will be processed based on the cancellation policy as described above and the money will then be refunded to the person/agency who has made the payment to us. Please note that the refund process may take 2 – 4 weeks due to banking procedures. If the refund is made to your credit card account or bank account, bank charges would be charged from the refund amount.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Arrival and Departure Policy</h2>
            <ul className="space-y-2 text-muted-foreground font-light mb-8">
              <li>• <strong>Check-in time:</strong> 1200 – 1500 hours. Early arrival is subject to availability. For guaranteed early check-in, reservation must be made from the previous night</li>
              <li>• <strong>Check-Out Time:</strong> 1000 – 1200 hours. Late check-outs are available upon request and subject to availability/payment.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Extra Use of Vehicle</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Please note that the cost of extra use of vehicles (cars/cars with driver) is not included in the services and therefore extra use of vehicle after transfer or after show is not allowed until unless mentioned in the detailed itinerary/services. The travel time indicated between cities is indicative and subject to traffic conditions.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Our Responsibilities and Limitations</h2>
            <div className="space-y-4 text-muted-foreground font-light mb-8">
              <p>
                After the conclusion of the tour/service cost, if there are any inbound excursions of monuments/museums, taxes, fuel costs or guide charges by the Government of India, which are outside our control, the same would be charged as extra.
              </p>
              <p>
                Ciao India Tours rates are based on the prevailing rates negotiated with suppliers. Hotels and airlines retain the right to change rates without notice. In the event of such a change – the rates quoted by us prior to the change may be modified by us in accordance with changes made by hotels or airlines.
              </p>
              <p>
                Ciao India Tours and its associates act only as an agent for hotels, airlines, transporters, railways and contractors providing other services. All vouchers, receipts, contracts and tickets issued by us are issued on the terms and conditions under which these services are provided by them. Tickets, vouchers or the passage contract in use by career / hotel or other contractors carrying out representation services constitute the sole contract between Customers and such contractor.
              </p>
              <p>
                Ciao India Tours itineraries are sample routes, with the aim of giving a general idea of ​​the probable travel programme. Numerous factors such as weather, road conditions, physical capacity of the participants, etc. They can dictate itinerary changes before or after the tour. Ciao India Tours reserves the right to change any aspect of the itinerary, including transportation and accommodation without notice in the interests of travel, participant safety, comfort and general well-being without any refund, compensation or refund. The additional cost, possibly due to such unforeseen circumstances beyond our control, will have to be paid by the customer.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Liability and Important Information</h2>
            <div className="space-y-4 text-muted-foreground font-light mb-8">
              <p>
                Ciao India Tours is not responsible for any delay or change in schedule or expenses incurred or losses, injuries and special or consequential damages, directly or indirectly, due to natural hazards, flight cancellations, accidents, breakdown of machinery or equipment, breakdown of transportation, Weather, disease, landslides, political closures, acts of God, dangers occurring at sea, floods, fire, acts of government OR any other authority, wars, civil disturbances, riots, thefts, thefts, epidemics, quarantines, medical or custom health departments, defaults or any other cause beyond our control or unforeseen accidents or any other cause, including any additional liabilities or expenses incurred by Customers. Furthermore, Customers will be responsible for the liability or additional expenses incurred by him due to the lost cases.
              </p>
              <p>
                Ciao India Tours reserves the right to cancel any service if it deems the tour, trip or passage to be viable for any reason or if the circumstances justify it, to refund its value and the Client will have no other or other request against the For any reason.
              </p>
              <p>
                Ciao India Tours reserves the right to refuse to perform its contract with any person it may deem undesirable in its absolute discretion and is not required to demonstrate any reason for doing so.
              </p>
              <p>
                All disputes arising from the contract between two parties are referred to an arbitrator who will be appointed by Ciao India Tours
              </p>
              <p>
                All such disputes are subject to the exclusive jurisdiction of the courts of India. The laws of India shall govern the validity, interpretation, construction, execution and enforcement of such terms and conditions.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Important Information</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              The Government has introduced "no smoking" legislation for hotels, restaurants and all public places. The hotel has designated smoking rooms. If you would like a smoking bedroom, please forward your request to us and we will try to book the same for you subject to availability.
            </p>

            <div className="bg-card/30 p-6 rounded-xl border border-white/10 mt-8">
              <p className="text-foreground font-medium mb-2">Contact Information</p>
              <p className="text-muted-foreground font-light">Ciao India Tours</p>
              <p className="text-muted-foreground font-light">140 – Budhpur Delhi -110036 (INDIA)</p>
              <p className="text-muted-foreground font-light">Registered License no.: ROF/NORTH/151/2015</p>
              <p className="text-muted-foreground font-light">GSTIN – 07AAIFC2858C3ZK</p>
              <p className="text-muted-foreground font-light">
                Email: <a href="mailto:info@ciaoindiatours.com" className="text-primary hover:underline">info@ciaoindiatours.com</a>
              </p>
              <p className="text-muted-foreground font-light">Phone: +919971981381</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;