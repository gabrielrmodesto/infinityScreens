import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() : JSX.Element {
		return (
			<Html lang="pt-br">
				<Head>
					<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
					<meta name="description" content="Infinity marketplace é um site de estudo para especialização em engenharia de software da UNICAMP 2021"/>
					<meta name="keywords" content="Infinity, Marketplace, UNICAMP, Engenharia de Software, Especialização, 2021, NextJS, ReactJS, Mobile, Gabriel Modesto"/>
					<meta http-equiv="X-UA-Compatible" content="IE=7,ie=edge"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<link
						rel="shortcut icon"
						href="icons/infinite.svg"
						type="image/svg"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" href="icons/logo.png" type="image/x-icon" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
