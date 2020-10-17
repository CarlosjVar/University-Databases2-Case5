SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Jorge Gutiérrez Cordero
-- Create date: october 12th,2020
-- Description: Retrieve all articles related to given hashtag.
-- =============================================
CREATE OR ALTER PROCEDURE SP_GetHashtagsArticles 
	@pHashtags LEVELHASHTAGS_TABLE READONLY
AS
BEGIN

	SET NOCOUNT ON;

    WITH 
        RelatedArticles (IdArticle)
    AS
    (
        SELECT 
            article.Id 
        FROM
            dbo.Articles AS article
        INNER JOIN
            dbo.ArticlesHashtags AS relatedArticles
            ON
            relatedArticles.IdArticle = article.Id
        INNER JOIN
            dbo.Hashtags AS hashtags
            ON
            hashtags.Id = relatedArticles.IdHashtag
        WHERE
            hashtags.Hashtag IN (SELECT Hashtag FROM @pHashtags)
    )
    SELECT
        article.Name, 
        article.Author, 
        article.PostTime,
        component.PreviousComponentId,
        component.ComponentTypeId,
        component.Content
    FROM
        dbo.Articles AS article
    INNER JOIN 
        dbo.ArticlesComponents AS component
        ON 
            article.Id = component.IdArticle
    WHERE
        article.Id IN (SELECT IdArticle FROM RelatedArticles)
    ORDER BY 
        article.Id
END
GO
