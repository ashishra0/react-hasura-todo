CREATE TABLE public.todos (
    id integer NOT NULL,
    text text NOT NULL,
    "user" text,
    completed boolean DEFAULT false NOT NULL
);
CREATE TABLE public."Product" (
    id integer NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;
CREATE TABLE public.articles (
    title text NOT NULL,
    body text NOT NULL,
    count integer NOT NULL
);
CREATE TABLE public.book (
    id integer NOT NULL
);
CREATE SEQUENCE public.book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.book_id_seq OWNED BY public.book.id;
CREATE TABLE public.dragon_ball_z (
    name text NOT NULL,
    level text NOT NULL,
    id integer NOT NULL,
    planet text NOT NULL
);
CREATE SEQUENCE public.dragon_ball_z_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.dragon_ball_z_id_seq OWNED BY public.dragon_ball_z.id;
CREATE TABLE public.recipes (
    name text NOT NULL,
    cuisine text NOT NULL,
    id integer NOT NULL
);
CREATE SEQUENCE public.recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;
CREATE SEQUENCE public.todos_todo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.todos_todo_id_seq OWNED BY public.todos.id;
ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);
ALTER TABLE ONLY public.book ALTER COLUMN id SET DEFAULT nextval('public.book_id_seq'::regclass);
ALTER TABLE ONLY public.dragon_ball_z ALTER COLUMN id SET DEFAULT nextval('public.dragon_ball_z_id_seq'::regclass);
ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);
ALTER TABLE ONLY public.todos ALTER COLUMN id SET DEFAULT nextval('public.todos_todo_id_seq'::regclass);
ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (title);
ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.dragon_ball_z
    ADD CONSTRAINT dragon_ball_z_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.todos
    ADD CONSTRAINT todos_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.todos
    ADD CONSTRAINT todos_todo_id_key UNIQUE (id);
