(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };
  const avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey JR.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500,
  };

  /*  const { poder, vision } = avengers;

  console.log(poder, vision.toUpperCase()); */

  const printAvenger = ({ ironman, ...rest }: Avengers) => {
    console.log(ironman);
    console.log(rest);
  };

  /*  printAvenger(avengers); */

    const avengersArr = ['Cap. America', 'Ironman', 'Hulk'];
    
    const [, ironman, ] = avengersArr;
    console.log({ironman});

})();
