import CustomerValidatorFactory from "../factory/customer.validator.factory";

export default class Customer {
  private _id: string;
  private _fullName: string;
  private _documentNumber: string;
  private _email: string;
  private _phone: string;

  constructor({
    documentNumber,
    email,
    id,
    fullName,
    phone,
  }: {
    id: string;
    fullName: string;
    documentNumber: string;
    email: string;
    phone: string;
  }) {
    this._id = id;
    this._fullName = fullName;
    this._documentNumber = documentNumber;
    this._email = email;
    this._phone = phone;
    this.validate();
  }

  validate() {
    CustomerValidatorFactory.create().validate(this);
  }

  get id(): string {
    return this._id;
  }

  get fullName(): string {
    return this._fullName;
  }

  get email(): string {
    return this._email;
  }

  get documentNumber(): string {
    return this._documentNumber;
  }

  get phone(): string {
    return this._phone;
  }
}
