import { Cat } from "./models/Cat";

export const resolvers = {
    Query: {
      hello: () => "yo",
      cats:() => Cat.find()
    },
    Mutation: {
        createCat:  (_, { name }) => {
            const kitty = new Cat({ name });
             kitty.save();
            return kitty;
        }
    }
  };