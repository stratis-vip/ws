"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var schema = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query{\n        expenses:[Expense]\n    }\n\n    type Expense{\n        id:Int,\n        date:String,\n        amount: Int,\n        type: String,\n        category:String\n    }\n\n    type Mutation {\n        newExpense(id: Int, date: String, amount: Int, type: String, category: String): Expense\n    }\n\n    type Subscription {\n        newExpenseCreated: Expense\n    }\n"], ["\n    type Query{\n        expenses:[Expense]\n    }\n\n    type Expense{\n        id:Int,\n        date:String,\n        amount: Int,\n        type: String,\n        category:String\n    }\n\n    type Mutation {\n        newExpense(id: Int, date: String, amount: Int, type: String, category: String): Expense\n    }\n\n    type Subscription {\n        newExpenseCreated: Expense\n    }\n"])));
exports.default = schema;
var templateObject_1;
