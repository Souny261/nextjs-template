export const Routes = {
    SITE: {
        HOME: "/",
    },
    DASHBOARD: {
        HOME: "/dashboard",
        PROFILE: "/dashboard/profile",
    },
    AUTH: {
        LOGIN: "/login",
    },
    ERROR: {
        NOT_FOUND: "/404",
    },
    API: {
        BASE: "/api",
        AUTH: {
            LOGIN: "/api/auth/login",
        },
        TODOS: {
            CREATE: "/todos",
            UPDATE: "/todos",
            DELETE: "/todos",
            GET: "/todos",
        }
    }
} as const;