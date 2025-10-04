# Ciao India Tours - Deployment Script (PowerShell)
Write-Host "🚀 Deploying Ciao India Tours to Vercel..." -ForegroundColor Green

# Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    
    # Deploy to Vercel
    Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Yellow
    vercel --prod
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "🎉 Deployment successful!" -ForegroundColor Green
        Write-Host "📋 Next steps:" -ForegroundColor Cyan
        Write-Host "1. Go to Google Search Console: https://search.google.com/search-console/" -ForegroundColor White
        Write-Host "2. Add your property: https://ciaoindiatour.co.in" -ForegroundColor White
        Write-Host "3. Submit sitemap: https://ciaoindiatour.co.in/sitemap.xml" -ForegroundColor White
        Write-Host "4. Request indexing for your homepage" -ForegroundColor White
        Write-Host "5. Create Google My Business listing" -ForegroundColor White
    } else {
        Write-Host "❌ Deployment failed. Please check the error messages above." -ForegroundColor Red
    }
} else {
    Write-Host "❌ Build failed. Please fix the errors and try again." -ForegroundColor Red
}
