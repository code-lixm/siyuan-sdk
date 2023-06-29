/**
 * Copyright (C) 2023 SiYuan Community
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Set notebook configuration
 */
export interface IResponse {
    /**
     * status code
     */
    code: number;
    data: IData;
    /**
     * status message
     */
    msg: string;
}

/**
 * notebook configuration
 */
export interface IData {
    /**
     * notebook open state
     */
    closed: boolean;
    /**
     * the path of new daily note
     */
    dailyNoteSavePath: string;
    /**
     * the template file path of new daily note
     */
    dailyNoteTemplatePath: string;
    /**
     * New document save location
     */
    docCreateSavePath: string;
    /**
     * notebook icon
     */
    icon: string;
    /**
     * notebook name
     */
    name: string;
    /**
     * Ref create doc save location
     */
    refCreateSavePath: string;
    /**
     * sequence number
     */
    sort: number;
    /**
     * document sorting mode
     */
    sortMode: number;
}
