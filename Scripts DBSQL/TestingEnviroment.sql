--/*
INSERT INTO 
    dbo.Hashtags (Hashtag)
VALUES 
    ('tournament'),       -- ID = 1
    ('shana'),            -- ID = 2
    ('everyone'),         -- ID = 3
    ('catalina'),         -- ID = 4
    ('granblue'),         -- ID = 5
    ('sign'),             -- ID = 6
    ('tempest/granblue'), -- ID = 7
    ('@zephyrzerrin'),    -- ID = 8
    ('fantasy'),          -- ID = 9
    ('photo'),            -- ID = 10
    ('your'),             -- ID = 11
    ('harem'),            -- ID = 12
    ('akashiya'),         -- ID = 13
    ('ナルメア'),         -- ID = 14
    ('@studio'),          -- ID = 15
    ('vampire/zetsuen'),  -- ID = 16
    ('glory'),            -- ID = 17
    ('like'),             -- ID = 18
    ('🔴live'),          -- ID = 19
    ('@bobbyd107'),       -- ID = 20  
    ('something'),        -- ID = 21
    ('glistened')         -- ID = 22

INSERT INTO 
    dbo.Articles (Name, Author, PostTime, LastUpdate, Enabled)
VALUES 
    ('ARTICLE1', 'AUTHOR1', GETDATE(), GETDATE(), 1), -- ID = 1
    ('ARTICLE2', 'AUTHOR2', GETDATE(), GETDATE(), 1), -- ID = 2
    ('ARTICLE3', 'AUTHOR3', GETDATE(), GETDATE(), 1)  -- ID = 3

INSERT INTO 
    dbo.ArticlesHashtags (IdArticle, IdHashtag)
VALUES
    (1, 1 ),
    (1, 3 ),
    (1, 7 ),
    (1, 9 ),
    (1, 11),
    (1, 13),
    (1, 15),
    (1, 17),
    (1, 19),
    (1, 21),
    (2, 2 ),
    (2, 4 ), 
    (2, 6 ),
    (2, 8 ),
    (2, 10),
    (2, 12),
    (2, 14),
    (2, 16),
    (2, 18),
    (2, 20),
    (2, 22),
    (3, 2 ),
    (3, 3 ),
    (3, 5 ),
    (3, 7 ),
    (3, 11),
    (3, 13),
    (3, 17),
    (3, 19)

INSERT INTO 
    dbo.ComponentTypes (TypeName)
VALUES
    ('Title'),    -- ID = 1
    ('Subtitle'), -- ID = 2
    ('Image'),    -- ID = 3
    ('Video'),    -- ID = 4
    ('Text')      -- ID = 5


INSERT INTO 
    dbo.ArticlesComponents (Content, PreviousComponentId, IdArticle, ComponentTypeId, LastUpdate, Enabled)
VALUES
    ('Title'   , NULL, 1, 1, GETDATE(), 1), -- ID = 1
    ('Text'    , 1   , 1, 5, GETDATE(), 1), -- ID = 2
    ('Subtitle', 2   , 1, 2, GETDATE(), 1), -- ID = 3
    ('Text'    , 3   , 1, 5, GETDATE(), 1), -- ID = 4
    ('Image'   , 4   , 1, 3, GETDATE(), 1), -- ID = 5
    ('Subtitle', 5   , 1, 2, GETDATE(), 1), -- ID = 6
    ('Text'    , 6   , 1, 5, GETDATE(), 1), -- ID = 7
    ('Video'   , 7   , 1, 4, GETDATE(), 1), -- ID = 8

    ('Title'   , NULL, 2, 1, GETDATE(), 1), -- ID = 9
    ('Video'   , 9   , 2, 4, GETDATE(), 1), -- ID = 10
    ('Text'    , 10  , 2, 5, GETDATE(), 1), -- ID = 11
    ('Subtitle', 11  , 2, 2, GETDATE(), 1), -- ID = 12
    ('Text'    , 12  , 2, 5, GETDATE(), 1), -- ID = 13
    ('Title'   , 13  , 2, 1, GETDATE(), 1), -- ID = 14
    ('Text'    , 14  , 2, 5, GETDATE(), 1), -- ID = 15
    ('Image'   , 15  , 2, 3, GETDATE(), 1), -- ID = 16

    ('Title'   , NULL, 3, 1, GETDATE(), 1), -- ID = 17
    ('Subtitle', 17  , 3, 2, GETDATE(), 1), -- ID = 18
    ('Text'    , 18  , 3, 5, GETDATE(), 1), -- ID = 19
    ('Title'   , 19  , 3, 1, GETDATE(), 1), -- ID = 20
    ('Image'   , 20  , 3, 3, GETDATE(), 1), -- ID = 21
    ('Subtitle', 21  , 3, 2, GETDATE(), 1), -- ID = 22
    ('Text'    , 22  , 3, 5, GETDATE(), 1)  -- ID = 23
--*/
DECLARE @TABLA LEVELHASHTAGS_TABLE;
INSERT INTO 
    @TABLA
VALUES
    ('catalina')

exec SP_GetHashtagsArticles @TABLA
