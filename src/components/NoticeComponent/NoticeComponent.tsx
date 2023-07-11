"use client";
import React, { useState, useEffect } from "react";
import styles from "./NoticeComponent.module.scss";
import CircularProgress from "@mui/material/CircularProgress";

export type NoticeComponentProps = {};

interface Article {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

const NoticeComponent: React.FC<NoticeComponentProps> = ({}) => {
  return (
    <div className={styles.noticecomponent}>
      <div>
        <ListNotice />
      </div>
    </div>
  );
};

function ListNotice() {
  const url =
    "https://newsapi.org/v2/top-headlines/sources?apiKey=878fa690f1484c20a4bec56a4265f456";

  const [Noti, setNoti] = useState<Article[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoad(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setNoti(data.sources);
      } catch (e) {
        console.error("Ha ocurrido un error inesperado", error);
      } finally {
        setIsLoad(false);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (isLoad) {
    return (
      <div className={styles.loadingContainer}>
        <p>Loading...</p>
        <CircularProgress color="inherit" />
      </div>
    );
  }
  return (
    <div className={styles.contentNews}>
      {Noti.map((source) => (
        <div key={source.id}>
          <h1>{source.name}</h1>
          <p>{source.description}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
export default NoticeComponent;
