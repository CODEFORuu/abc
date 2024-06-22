// Default currency and unit symbols
let currencySymbol = '$';
let unitSymbol = '/month';
// Mock exchange rates (in relation to USD)
const exchangeRates = {
    'USD': 1,
    'EUR': 0.82, // Example exchange rate
    'JPY': 110.14 // Example exchange rate
  };
  
// Function to update pricing details based on currency and unit symbols
function updatePricingDetails() {
  const prices = document.querySelectorAll('.price');
  prices.forEach(price => {
    const currentPrice = price.getAttribute('data-price');
    const updatedPrice = currentPrice.replace('currency', currencySymbol).replace('/unit', unitSymbol);
    price.textContent = updatedPrice;
  });
}

// Function to handle currency selection
function handleCurrencyChange(symbol) {
  currencySymbol = symbol;
  updatePricingDetails();
}

// Function to handle unit selection
function handleUnitChange(symbol) {
  unitSymbol = symbol;
  updatePricingDetails();
}

// JavaScript for interactive pricing toggles and buttons
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-button');
  const currencyButtons = document.querySelectorAll('.currency-button');
  const unitButtons = document.querySelectorAll('.unit-button');
  const plans = document.querySelectorAll('.plan');

  // Initialize pricing details based on default symbols
  updatePricingDetails();

  // Event listeners for plan toggle buttons
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const planToShow = this.getAttribute('data-plan');
      plans.forEach(plan => {
        plan.classList.remove('active');
      });
      document.querySelector(`.plan.${planToShow}`).classList.add('active');
    });
  });

  // Event listeners for currency selection buttons
  currencyButtons.forEach(button => {
    button.addEventListener('click', function() {
      currencyButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const currency = this.getAttribute('data-currency');
      handleCurrencyChange(currency);
    });
  });

  // Event listeners for unit selection buttons
  unitButtons.forEach(button => {
    button.addEventListener('click', function() {
      unitButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const unit = this.getAttribute('data-unit');
      handleUnitChange(unit);
    });
  });
});
