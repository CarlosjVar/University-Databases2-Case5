/*
   Sunday, October 11, 20208:24:37 PM
   User: Jorge Gutiérrez Cordero
   Server: LAPTOP-DPQTPDSC
   Database: Caso5BD2
   Application: Caso #5 - Bases de Datos II
*/

/* To prevent any potential data loss issues, you should review this script in detail before running it outside the context of the database designer.*/
BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT

BEGIN TRANSACTION
GO
DROP TABLE IF EXISTS dbo.Media
CREATE TABLE dbo.Media
	(
	Id int NOT NULL IDENTITY (1, 1),
	SectionId int NOT NULL,
	Data varbinary(MAX) NOT NULL,
	Enabled bit NOT NULL
	)  ON [PRIMARY]
	 TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE dbo.Media ADD CONSTRAINT
	PK_Media PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO

COMMIT

BEGIN TRANSACTION
GO
DROP TABLE IF EXISTS dbo.ArticlesHashtags
CREATE TABLE dbo.ArticlesHashtags
	(
	Id int NOT NULL IDENTITY (1, 1),
	IdArticle int NOT NULL,
	IdHashtag int NOT NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.ArticlesHashtags ADD CONSTRAINT
	PK_ArticlesHashtags PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO

COMMIT

BEGIN TRANSACTION
GO
DROP TABLE IF EXISTS dbo.Hashtags
CREATE TABLE dbo.Hashtags
	(
	Id int NOT NULL IDENTITY (1, 1),
	Word nvarchar(50) NOT NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.Hashtags ADD CONSTRAINT
	PK_Hashtags PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.Hashtags SET (LOCK_ESCALATION = TABLE)
GO
COMMIT


BEGIN TRANSACTION
GO
DROP TABLE IF EXISTS dbo.Sections
DROP TABLE IF EXISTS dbo.Section
CREATE TABLE dbo.Sections
	(
	Id int NOT NULL IDENTITY (1, 1),
	Header varchar(100) NOT NULL,
	Text text NOT NULL,
	PreviusSectionId int NULL,
	ArticleId int NOT NULL,
	LastUpdate datetime NOT NULL,
	Enabled bit NOT NULL,
	IsSubtitle bit NOT NULL
	)  ON [PRIMARY]
	 TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE dbo.Sections ADD CONSTRAINT
	PK_Sections PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
COMMIT

BEGIN TRANSACTION
GO
DROP TABLE IF EXISTS dbo.Articles
CREATE TABLE dbo.Articles
	(
	Id int NOT NULL IDENTITY (1, 1),
	Name nvarchar(100) NOT NULL,
	Author nvarchar(100) NOT NULL,
	PostTime datetime NOT NULL,
	LastUpdate datetime NOT NULL,
	Enabled bit NOT NULL
	)  ON [PRIMARY]
GO
ALTER TABLE dbo.Articles ADD CONSTRAINT
	PK_Articles PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO
ALTER TABLE dbo.Articles SET (LOCK_ESCALATION = TABLE)
GO
COMMIT


BEGIN TRANSACTION
ALTER TABLE dbo.Media ADD CONSTRAINT
	FK_Media_Sections FOREIGN KEY
	(
	SectionId
	) REFERENCES dbo.Sections
	(
	Id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.Media SET (LOCK_ESCALATION = TABLE)
GO
ALTER TABLE dbo.ArticlesHashtags ADD CONSTRAINT
	FK_ArticlesHashtags_Articles FOREIGN KEY
	(
	IdArticle
	) REFERENCES dbo.Articles
	(
	Id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.ArticlesHashtags ADD CONSTRAINT
	FK_ArticlesHashtags_Hashtags FOREIGN KEY
	(
	IdHashtag
	) REFERENCES dbo.Hashtags
	(
	Id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.ArticlesHashtags SET (LOCK_ESCALATION = TABLE)
GO
ALTER TABLE dbo.Sections ADD CONSTRAINT
	FK_Sections_Articles FOREIGN KEY
	(
	ArticleId
	) REFERENCES dbo.Articles
	(
	Id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.Sections ADD CONSTRAINT
	FK_Sections_Section FOREIGN KEY
	(
	PreviusSectionId
	) REFERENCES dbo.Sections
	(
	Id
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
GO
ALTER TABLE dbo.Sections SET (LOCK_ESCALATION = TABLE)
GO
COMMIT
