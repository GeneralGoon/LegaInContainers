import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

class Mod implements IPostDBLoadMod
{
    private modConfig = require("../config/config.json");

    public postDBLoad(container: DependencyContainer): void
    {
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables: IDatabaseTables = databaseServer.getTables();
        
        for (const container of this.modConfig.containers) 
        {
            try 
            {
                tables.templates.items[container]._props.Grids[0]._props.filters[0].Filter.push("6656560053eaaa7a23349c86");
            }
            catch
            {
                undefined
            }
        }
    }
}

export const mod = new Mod();
