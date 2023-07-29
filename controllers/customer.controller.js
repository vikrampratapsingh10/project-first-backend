import { Family } from "../models/customer.model.js";

export const Registration = async (req, res, next) => {
  try {
    const customer = await Family.create(req.body);
    if (customer) {
      return res.status(200).json({ message: "data saved", Customer: customer, status: true });
    } else {
      return res.status(401).json({ error: "Internal server error", status: false });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error", status: false });
  }
};

export const getFamilyDetails = async (req, res, next) => {
  try {
    const customer = await Family.find();
    if (customer) {
      return res.status(200).json({ customer: customer, status: true });
    } else {
      return res.status(401).json({ err: "Internal server error", status: false });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Internal server error", status: false });
  }
};

export const getParticularFamily = async (req, res, next) => {
  try {
    const customer = await Family.findById({ _id: req.body.id });
    if (customer) {
      return res.status(200).json({ customer: customer, status: true });
    } else {
      return res.status(401).json({ err: "Internal server error", status: false });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: "Internal server error", status: false });
  }
};

export const deleteCustomer = async (req, res, next) => {
  try {
    const customer = Family.findByIdAndDelete({ _id: req.body.id });
    if (customer) {
      return res.status(200).json({ message: "customer delete successful", status: true });
    } else {
      return res.status(500).json({ err: "Internal Server error", status: false });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Internal Server error", status: false });
  }
};


export const statusChange = async (req, res, next) => {
  try {
    const family = await Family.findByIdAndUpdate(req.params.id, {
      status: true,
    });
    if (!family)
      return res.status(400).json({ error: "this family cannot found..." });
    return res.status(200).json({ message: "successful change", family:family, status: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server error", status: false });
  }
};
