/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundColor: {
        'search': '#F4F6F9',
        'main': "#F4F6F9",
        'primary': " #005EB8",
        'primary-dark': "#002554",
        'status-red': "rgba(229, 85, 79, 0.87)",
        'status-yellow': "rgba(255, 184, 0, 0.87)",
        'status-green': "#40C1AC",
        'unactiveTab': "#D3DAE1"
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #005EB8 15.01%, #2093B3 51%, #40C1AC 80%)',
        'secondry-gradient': 'linear-gradient(71.42deg, #8FA0B4 -4.57%, #002554 106.92%)',
        'user-pattern': "url('../images/updatesBAckground.svg')",
        'support' : "url('../images/customerSupport.svg')",
        'support-hover' : "url('../images/customerSupport_Hover.svg')",
        'hr' : "url('../images/HR.svg')",
        'hr-hover' : "url('../images/HR_hover.svg')",
        'itSupport' : "url('../images/ITSupport.svg')",
        'itSupport-hover' : "url('../images/IT Support_hover.svg')",
        'services' : "url('../images/services.svg')",
        'services-hover' : "url('../images/services_hover.svg')",
        'crm' : "url('../images/crm.svg')",
        'crm-hover' : "url('../images/crm_hover.svg')",
        'documents' : "url('../images/Documents.svg')",
        'documents-hover' : "url('../images/Documents_hover.svg')",
        'slider1': "url('../images/slider1.svg')",
        'slider2': "url('../images/slider2.svg')",
        'slider3': "url('../images/slider3.svg')",
      },
      colors: {
        "primary-text": "#002554",
        "primary-blue": "#005EB8",
        "secondry-text": "#90969E",
        'status-green': "#40C1AC",
        'status-gray': "#8FA0B4",
    },
    fontSize:{
      'xll': "10px"
    },
    width: {
      "10/10": "10%"
    }
    },
  },
  plugins: [],
}
