import ConfigModel from "../model/configModel";

export function getConfig(name: string) {
  return ConfigModel.findOne({ name: name });
}

export async function addConfig(name: string, data: string) {
  const config = await ConfigModel.findOne({ name: name });
  if (config) {
    config.data = data;
    try {
      await config.save();
      return { success: true };
    } catch (err) {
      return { success: false, error: err };
    }
  } else {
    const newConfig = new ConfigModel({
      name: name,
      data: data,
    });
    try {
      await newConfig.save();
      return { success: true };
    } catch (err) {
      return { success: false, error: err };
    }
  }
}
