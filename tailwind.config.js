

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
    colors: {
      'blue':'#2c9be8',
      'grey1':'#414141',
      'gray':'#E5E5E5',
      'orange':'#E8792C',
      'grey2':'#818181',
      'grey3': '#D4D4D4',
      "white":' #FFFFFF',
      'grey4': '#DEDEDE'
    },
    fontFamily:{
      'DM-Sans':['DM Sans','sans-serif'],
      'Bitter':['Bitter','sans-serif']
    },
    keyframes:{
          bounceDown: { 
            "0%, 100%" : {
              transform: "translateY(-50%)", 
              "animation-timing-function":"cubic-bezier(0.8,0,1)" 
            },
            "50%" :{
              transform: "translateY(0%)", 
              "animation-timing-function":"cubic-bezier(0.8,0,1)" 
            }
          },

          bounceUp: { 
            "0%, 100%" : {
              transform: "translateY(50%)", 
              "animation-timing-function":"cubic-bezier(0.8,0,1)" 
            },
            "50%" :{
              transform: "translateY(0%)", 
              "animation-timing-function":"cubic-bezier(0.8,0,1)" 
            }
          }
    },
    animation:{
      bounceDown:"bounceDown 2s infinite",
      bounceUp:"bounceUp 2s infinite",
    }
   },
  },
  plugins: [],
}
