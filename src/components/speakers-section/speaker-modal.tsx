/*eslint-disable*/

import speakers from "hooks/useSpeakers";
import Image from "next/image";
import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <ModalHeader toggle={modalToggle} className={styles.modal_header}>
        <div className={styles.modal_speaker_info_container}>
          <Image unoptimized className={styles.card_image} src={speaker!.photo} alt={`Foto ${speaker!.name}`} width="90%" height="90%" />
          <div className={styles.modal_speaker_info_content}>
            <h1>{speaker!.name}</h1>
            <p>{speaker!.tech}</p>
            <p>{speaker!.title}</p>
          </div>
        </div>
      </ModalHeader>
      <ModalBody className={styles.modal_body}>
        <h2>{speaker!.topic}</h2>
        <p>{speaker!.mini_bio}</p>
      </ModalBody>
      <ModalFooter className={styles.modal_footer}>
        <a href="#"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        <a href="#"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
      </ModalFooter>
    </Modal>
  );
}

export default SpeakerModal;

