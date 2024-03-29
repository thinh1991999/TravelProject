import methods from "validator";

class Validator {
  rules;
  // rules:any;
  isValid;
  errors;
  constructor(rules) {
    this.rules = rules;
    this.initiate();
  }

  initiate() {
    this.isValid = true;
    this.errors = {};
  }

  validate(state, all, type) {
    this.initiate();

    if (all) {
      this.rules.forEach((rule) => {
        if (this.errors[rule.field]) return;
        const fieldValue = state[rule.field]?.trim() || "";
        const args = rule.args || [];
        if (typeof rule.method === "string") {
        }
        const validationMethod =
          typeof rule.method === "string" ? methods[rule.method] : rule.method;
        if (validationMethod(fieldValue, ...args, state) !== rule.validWhen) {
          this.errors[rule.field] = rule.message;
          this.isValid = false;
        }
      });
      return this.errors;
    } else {
      const filterRulles = this.rules.filter((item) => item.field === type);
      if (this.errors[type]) return;
      filterRulles.forEach((rule) => {
        if (this.errors[rule.field]) return;
        const fieldValue = state[rule.field]?.trim() || "";
        const args = rule.args || [];
        const validationMethod =
          typeof rule.method === "string" ? methods[rule.method] : rule.method;
        if (validationMethod(fieldValue, ...args, state) !== rule.validWhen) {
          this.errors[rule.field] = rule.message;
          this.isValid = false;
        }
      });
      return this.errors;
    }
  }
}

export default Validator;
