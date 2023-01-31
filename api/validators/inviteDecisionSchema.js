import Joi from "joi";

const inviteDecisionSchema = Joi.object({
  _id: Joi.string().required(),
});

export default inviteDecisionSchema;
