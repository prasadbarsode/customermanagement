export interface SmallcustDetails {
    _id: string;
    id: string;
    type: number;
    name: string;
    country: string;
    websiteUrl: string;
    numberOfEmployees: number;
    contractExpiryDate: string;
    annualTurnover?: number;
    complianceChecked?: boolean;
}