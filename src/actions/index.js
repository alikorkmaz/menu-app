import {FETCH_MENU,} from "./types";

export const fetchMenu = () => async dispatch => {
    // const response = await api.get("  /my/api/path");
    dispatch({
        type: FETCH_MENU, payload:
            {
                "items": [
                    {
                        "id": 100,
                        "name": "Icecekler",
                        "items": [
                            {
                                "id": 1000,
                                "name": "Soguk Icecekler",
                                "items": [
                                    {
                                        "id": 10000,
                                        "name": "Kola"
                                    },
                                    {
                                        "id": 10001,
                                        "name": "Ayran"
                                    }
                                ]
                            },
                            {
                                "id": 1000,
                                "name": "Sicak Icecekler",
                                "items": [
                                    {
                                        "id": 10002,
                                        "name": "Cay"
                                    },
                                    {
                                        "id": 10003,
                                        "name": "Kahve"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 101,
                        "name": "Yiyecekler",
                        "items": [
                            {
                                "id": 1000,
                                "name": "Tostlar",
                                "items": [
                                    {
                                        "id": 10000,
                                        "name": "Ayvalik Tostu"
                                    },
                                    {
                                        "id": 10001,
                                        "name": "Kasarli Tost"
                                    }
                                ]
                            },
                            {
                                "id": 1000,
                                "name": "Tatlilar",
                                "items": [
                                    {
                                        "id": 10002,
                                        "name": "Waffle"
                                    },
                                    {
                                        "id": 10003,
                                        "name": "Dondurma"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
    });
};
