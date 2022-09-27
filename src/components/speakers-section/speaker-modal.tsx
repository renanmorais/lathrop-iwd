/*eslint-disable*/
import speakers from "hooks/useSpeakers";
import { Speaker } from "models/speaker";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import styles from '../../styles/Speakers.module.css'

interface ModalProps {
  modalOpen: boolean;
  modalToggle: () => void;
  id: number;
}

const SpeakerModal: React.FC<ModalProps> = ({ id, modalOpen, modalToggle }) => {
  const speaker = speakers.find(speaker => {
    if (speaker.id === id) {
      return speaker;
    }
  });

  return (
    <Modal isOpen={modalOpen} toggle={modalToggle} centered size="lg" scrollable>
      <ModalHeader toggle={modalToggle}>
        <div className={styles.speaker_info_container}>
          <Image unoptimized className={styles.card_image} src={speaker!.photo} alt={`Foto ${speaker!.name}`} width="90%" height="90%" />
          <div className={styles.speaker_info_content}>
            <h1>{speaker!.name}</h1>
            <p>{speaker!.tech}</p>
            <p>{speaker!.title}</p>
          </div>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className={styles.speaker_content}>
          <h2>{speaker!.topic}</h2>
          <p>{speaker!.mini_bio}</p>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default SpeakerModal;

