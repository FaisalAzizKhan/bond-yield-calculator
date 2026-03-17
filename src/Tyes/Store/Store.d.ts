interface AuthState {
  user: User | null;
  expiresIn: number | null;
}

interface User {
  id: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  image?: string;
  user_type?: string;
  token?: string | null;
  qoinBankAccountStatus?: QoinBankAccountStatus;
}

interface QoinBankAccountStatus {
  status: "Approved" | "Pending" | "Rejected" | string; // restrict to known statuses or keep string
  message: string;
}


interface RegisterState {
  email: strin | email | null
  phone: string | null
  password: string | null
  fullname: string | mull
  dateOfBirth: Date | null
  gender: male | female | other | null
 }

