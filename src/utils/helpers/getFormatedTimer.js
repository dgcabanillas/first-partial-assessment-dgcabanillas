const auxFormatNumber = ( number ) => {
  return `${number < 10 ? `0${number}` : `${number}`}`
}

const getFormatedTimer = ( seconds ) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return `${auxFormatNumber(h)}:${auxFormatNumber(m)}:${auxFormatNumber(s)}`;
}

export default getFormatedTimer;