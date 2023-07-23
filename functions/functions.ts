(() => {
  const hero: string = 'Flash';

  function returName(): string {
    return hero;
  }

  const activateBatisignal = ():string => {
    return 'Batisenal activada';
  };

    console.log(typeof activateBatisignal);
    
    const heroName = returName();
})();
