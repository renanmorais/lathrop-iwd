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
    <Modal isOpen={modalOpen} toggle={modalToggle}>
      <ModalHeader toggle={modalToggle}>{speaker?.name}</ModalHeader>
      <ModalBody>
        <Image unoptimized className={styles.card_image} src={speaker?.photo} alt={`Foto ${speaker?.name}`} width="90%" height="90%" />
      </ModalBody>
    </Modal>
  );
}

export default SpeakerModal;

