const isProdMode=Object.is(process.env.NODE_ENV,'production');

module.exports={
	cdnUrl:isProdMode?'https://localhost:3000':'',
  	baseUrl: isProdMode ? 'http://localhost:8000/':'',
  	socketHost: isProdMode ? 'http://localhost:3000' : ''
}