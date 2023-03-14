import methods from "validator";

class Validator {
  rules: {
    args?: any;
    method?: any;
    field?: any;
    message?: string;
    validWhen?: boolean;
  }[];
  isValid: boolean = true;
  errors: any = {};
  constructor(rules: {}[]) {
    this.rules = rules;
    this.initiate();
  }

  initiate() {
    this.isValid = true;
    this.errors = {};
  }

  validate(state?: any, all: boolean = true, type?: any) {
    this.initiate();
    if (all) {
      this.rules.forEach((rule) => {
        if (this.errors[rule.field]) return;
        const fieldValue = state[rule.field].trim() || "";
        const args = rule.args || [];
        const validationMethod =
          typeof rule.method === "string" ? methods[rule.method] : rule.method;
        if (validationMethod(fieldValue, ...args, state) !== rule.validWhen) {
          this.errors[rule.field] = rule.message;
          this.isValid = false;
        }
      });
      return this.errors;
    } else {
      const filterRulles = this.rules.filter(
        (item: any) => item.field === type
      );
      if (this.errors[type]) return;
      filterRulles.forEach((rule: any) => {
        if (this.errors[rule.field]) return;
        const fieldValue = state[rule.field].trim() || "";
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
