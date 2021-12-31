document.getElementById('input').addEventListener('click', (event) => {
	var color = '#';
	var symbols = '0123456789ABCDEF';

	for (var i = 0; i < 6; i++) {
		color = color + symbols[Math.floor(Math.random() * 16)];
	}
	document.body.style.background = color;
	document.getElementById('hex').innerHTML = color;
});

document.querySelector('.copy-to-clipboard').addEventListener('click', (e) => {
	const color = document.getElementById('hex').innerText;
	const type = 'text/plain';
	const blob = new Blob([color], { type });
	const data = [new ClipboardItem({ [type]: blob })];
	navigator.clipboard.write(data).then(
		async () => alert('Color copied to the clipboard.'),
		(err) => {
			alert('Error occurred in copying data to the clipboard.');
			throw err;
		}
	);
});
