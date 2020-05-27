/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2020
 */
export const USERNAME :string = process.env.ZOWE_USERNAME;
export const PASSWORD :string = process.env.ZOWE_PASSWORD;
export const SERVER_HOST :string = process.env.SERVER_HOST_NAME;
export const SERVER_PORT :number = parseInt(process.env.SERVER_HTTPS_PORT);

export const BASE_URL :string = `https://${SERVER_HOST}:${SERVER_PORT}`;
export const BASE_URL_WITH_PATH :string =`${BASE_URL}/ui/v1/explorer-mvs`;

export const TEST_DATASET :string = `${USERNAME}.FVTTEST`;