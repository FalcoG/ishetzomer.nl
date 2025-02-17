export default ({ content, season }: Lume.Data, helpers: Lume.Helpers) =>
`<html lang="nl" data-season="${season.current}">
	<head>
		<title>Is het zomer? - ${season.current === "summer"? "ja!" : "nee!"}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
	<style>
		html {
			background: linear-gradient(azure, lightblue);
			min-height: 100vh;
			display: flex;
		}
		
		html[data-season="summer"] {
			background: linear-gradient(darkorange, gold)
		}
		
		body {
			max-width: 32em;
			margin: 0 auto;
			font-family: sans-serif;
			color: black;
			line-height: 1.5em;
			text-align: center;		
			align-self: center;
		}
	</style>
	<body>
	${content}
	</body>
</html>`;
