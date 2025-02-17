import { Seasons, AstroTime } from 'npm:astronomy-engine';

const seasons = Seasons(new Date().getFullYear())
export const now = new AstroTime(new Date())

export const summer_start = seasons.jun_solstice
export const summer_end = seasons.sep_equinox

function getCurrentSeason () {
	if (now > seasons.mar_equinox) {
		return "spring"
	} else if (now > seasons.jun_solstice) {
		return "summer"
	} else if (now > seasons.sep_equinox) {
		return "autumn"
	} else {
		return "winter"
	}
}

export const current = getCurrentSeason()
