import fs from "fs";
import path from "path";

export interface ModuleConfig {
  modules: {
    [key: string]: {
      enabled: boolean;
      [key: string]: any;
    };
  };
}

export function loadConfig(): ModuleConfig {
  try {
    const configPath = path.join(process.cwd(), "config", "modules.json");
    const configData = fs.readFileSync(configPath, "utf-8");
    return JSON.parse(configData);
  } catch (error) {
    console.error("Error loading config:", error);
    return { modules: {} };
  }
}

export function isModuleEnabled(moduleName: string): boolean {
  const config = loadConfig();
  return config.modules[moduleName]?.enabled ?? false;
}

export function getModuleConfig(moduleName: string) {
  const config = loadConfig();
  return config.modules[moduleName];
}

