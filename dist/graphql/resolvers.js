"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_subscriptions_1 = require("graphql-subscriptions");
var pubsub = new graphql_subscriptions_1.PubSub();
var expenses = [
    { id: 1, date: "2020-12-01", amount: 5, type: 'αλδα', category: 'κατηγορια 1' },
    { id: 2, date: "2020-12-03", amount: 32, type: 'βήτα', category: 'κατηγορια 2' },
];
var createExpense = function (args) {
    return { id: args.id, date: args.date, amount: args.amount, type: args.type, category: args.category };
};
var resolvers = {
    Query: {
        expenses: function () { return expenses; }
    },
    Mutation: {
        newExpense: function (root, args) {
            var expense = createExpense(args);
            pubsub.publish('expense', { newExpenseCreated: expense });
            return expense;
        }
    },
    Subscription: {
        newExpenseCreated: {
            subscribe: function () { return pubsub.asyncIterator('expense'); } // subscribe to changes in a topic
        },
    }
};
exports.default = resolvers;
