USE [Caso5BD2]
GO

/****** Object:  Table [dbo].[Articulos]    Script Date: 10/8/2020 6:13:36 PM ******/
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

/****** Object:  Table [dbo].[ArticulosPorHashtags]    Script Date: 10/8/2020 6:13:36 PM ******/
DROP TABLE IF EXISTS [dbo].[ArticulosPorHashtags]
CREATE TABLE [dbo].[ArticulosPorHashtags](
	[IdArticulo] [int] NOT NULL,
	[IdHashtag] [int] NOT NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_ArticulosPorHashtags] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Imagenes]    Script Date: 10/8/2020 6:13:36 PM ******/
DROP TABLE IF EXISTS [dbo].[Imagenes]
CREATE TABLE [dbo].[Imagenes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idArticulo] [int] NOT NULL,
	[ImageData] [varbinary](max) NOT NULL,
 CONSTRAINT [PK_Imagenes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Articulos]    Script Date: 10/8/2020 6:13:36 PM ******/
DROP TABLE IF EXISTS [dbo].[Articulos]
CREATE TABLE [dbo].[Articulos](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [nvarchar](30) NOT NULL,
	[subtitulo] [nvarchar](30) NOT NULL,
	[texto] [ntext] NOT NULL,
 CONSTRAINT [PK_Articulos] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Hashtags]    Script Date: 10/8/2020 6:13:36 PM ******/
DROP TABLE IF EXISTS [dbo].[Hashtags]
CREATE TABLE [dbo].[Hashtags](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[hashtag] [nvarchar](20) NOT NULL,
 CONSTRAINT [PK_Hashtags] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Implementation:  FK Constraints   Script Date: 10/8/2020 7:10:01 PM ******/
ALTER TABLE [dbo].[ArticulosPorHashtags]  WITH CHECK ADD  CONSTRAINT [FK_ArticulosPorHashtags_Articulos] FOREIGN KEY([IdArticulo])
REFERENCES [dbo].[Articulos] ([Id])
GO
ALTER TABLE [dbo].[ArticulosPorHashtags] CHECK CONSTRAINT [FK_ArticulosPorHashtags_Articulos]
GO
ALTER TABLE [dbo].[ArticulosPorHashtags]  WITH CHECK ADD  CONSTRAINT [FK_ArticulosPorHashtags_Hashtags] FOREIGN KEY([IdHashtag])
REFERENCES [dbo].[Hashtags] ([Id])
GO
ALTER TABLE [dbo].[ArticulosPorHashtags] CHECK CONSTRAINT [FK_ArticulosPorHashtags_Hashtags]
GO
ALTER TABLE [dbo].[Imagenes]  WITH CHECK ADD  CONSTRAINT [FK_Imagenes_idArticulo_Articulos_id] FOREIGN KEY([idArticulo])
REFERENCES [dbo].[Articulos] ([Id])
GO
ALTER TABLE [dbo].[Imagenes] CHECK CONSTRAINT [FK_Imagenes_idArticulo_Articulos_id]
GO
COMMIT

