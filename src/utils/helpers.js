export const formatCurrency = (amount) => {
  return "$" + amount.toLocaleString();
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

export const capitalizeText = (text) =>{
  return text.charAt(0).toUpperCase()+ text.slice(1);
};