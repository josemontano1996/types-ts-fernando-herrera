(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): void;
  }

  interface Address {
    id: number;
    zip: number;
    city: string;
  }

  const client: Client = {
    name: 'Josema',
    age: 27,
    address: {
      id: 12345,
      zip: 23456,
      city: 'Beckingen',
    },
    getFullAddress(id: string) {
      return this.address.zip;
    },
  };

  const client2: Client = {
    name: 'Melisa',
    age: 30,
    address: {
      id: 1234,
      zip: 1234351,
      city: 'Beckingen',
    },
    getFullAddress(id: string) {
      return this.address.zip;
    },
  };
})();
