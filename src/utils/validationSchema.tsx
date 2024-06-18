import * as yup from "yup"

export const campaignValidationSchema = yup.object().shape({
    campaignName: yup.string().required("Campaign name is required"),
    campaignDescription: yup
        .string()
        .required("Campaign Description is required"),

    startDate: yup.string().required("Start Date is required"),
    endDate: yup.string().required("End Date is required"),

    linkedKeywords: yup
        .array()
        .min(1, "You have to enter at least one linked keyword")
        .required("You have to enter at least one linked keyword"),
    dailyDigest: yup.string().required("Daily Digest is required"),
})
