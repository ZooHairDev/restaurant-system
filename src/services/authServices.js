import supabase from './supabase';

export async function signUp(email, password) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: 'user',
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    localStorage.setItem('userId', data.user.id);

    return data.user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    localStorage.removeItem('userId');
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function login(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    localStorage.setItem('userId', data.user.id);

    return data.user;
  } catch (error) {
    throw new Error(error.message);
  }
}
