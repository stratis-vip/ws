import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();

const expenses = [
  {id: 1, date: "2020-12-01", amount: 5, type: 'αλδα', category: 'κατηγορια 1'},
  {id: 2, date: "2020-12-03", amount: 32, type: 'βήτα', category: 'κατηγορια 2'},
]
const createExpense = (args:any) => {
  return { id: args.id, date: args.date, amount: args.amount, type: args.type, category: args.category };
}

const resolvers = {
  Query:{
    expenses: () => expenses
  },
  Mutation:{
    newExpense: (root:any, args:any) => {
      const expense = createExpense(args);
      pubsub.publish('expense', { newExpenseCreated: expense });
      return expense;
    }
  },
  Subscription: {
    newExpenseCreated: {
      subscribe: () => pubsub.asyncIterator('expense')  // subscribe to changes in a topic
    },
  }
}

export default resolvers