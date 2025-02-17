export const layout = "layout.ts";

export default (data: Lume.Data, helpers: Lume.Helpers) => {
	return `
<h1>Is het zomer?</h1>
<h2>${data.season.current === "summer" ? "Ja! 🌞" : "Nee."}</h2>
  `;
}
