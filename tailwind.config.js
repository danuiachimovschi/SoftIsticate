module.exports = {
  content: [],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {},
    container: {
      center: true,
    },
    spacing: {
      '0': '0px',
      '1': '5px',
      '2': '8px',
      '3': '11px',
      '4': '14px',
      '5': '17px',
      '6': '20px',
      '7': '23px',
      '8':'26px',
      '9':'29px',
      '10':'32px',
      '11':'35px',
      '12':'40px'
    },
    colors: {
      blue: "#05396B",
      deepgreen:"#389583",
      neon:"#5CDB94",
      green:"#8DE4AF",
      gray:"#EDF5E0",
      white:"#FFF",
      night:"#000",
      dark:"#001E26",
      shodow:"#888888",
      greenWindow:"#ECF0F5"
    },
    fontFamily: {
      jet: ['JetBrains Mono', 'monospace'],
      main: ['Merriweather', 'sans-serif'],
    },
    screens: {
			xl: { max: "1460px" },
			lg: { max: "1120px" },
			md: { max: "930px" },
			sm: { max: "670px" },
			tn: { max: "400px" },
		},
  },
}