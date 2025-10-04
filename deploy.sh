#!/bin/bash

# Ciao India Tours - Deployment Script
echo "🚀 Deploying Ciao India Tours to Vercel..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🚀 Deploying to Vercel..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "📋 Next steps:"
        echo "1. Go to Google Search Console: https://search.google.com/search-console/"
        echo "2. Add your property: https://ciaoindiatour.co.in"
        echo "3. Submit sitemap: https://ciaoindiatour.co.in/sitemap.xml"
        echo "4. Request indexing for your homepage"
        echo "5. Create Google My Business listing"
    else
        echo "❌ Deployment failed. Please check the error messages above."
    fi
else
    echo "❌ Build failed. Please fix the errors and try again."
fi
