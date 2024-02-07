import supabase from './supabase';

const table = 'menu_items';

export const getMenuItems = async () => {
  let { data, error } = await supabase.from(table).select('*').order('id');
  if (error) throw error;
  return data;
};

export const createMenuItem = async (item) => {
  let { data, error } = await supabase.from(table).insert([item]).select();
  if (error) throw error;
  return data;
};

export const updateMenuItem = async (id, updates) => {
  let { data, error } = await supabase
    .from(table)
    .update(updates)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
};

export const deleteMenuItem = async (id) => {
  let { data, error } = await supabase.from(table).delete().eq('id', id);
  if (error) throw error;
  return data;
};
