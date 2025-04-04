import speakers from "hooks/useSpeakers";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/Speakers.module.css";
import { Speaker } from "models/speaker";

interface ModalProps {
  modalOpen: boolean;
  modalToggle: () => void;
  speaker: Speaker;
}

const SpeakerModal: React.FC<ModalProps> = ({
  speaker,
  modalOpen,
  modalToggle,
}) => {
  return (
    <Modal
      isOpen={modalOpen}
      toggle={modalToggle}
      centered
      size="lg"
      scrollable
    >
      <ModalHeader toggle={modalToggle} className={styles.modal_header}>
        <div className={styles.modal_speaker_info_container}>
          <Image
            unoptimized
            className={styles.card_image}
            src={speaker.photo ? speaker.photo : ""}
            alt={`Foto ${speaker.name}`}
            width="100"
            height="100"
            loading="lazy"
          />
          <div className={styles.modal_speaker_info_content}>
            <h1>{speaker.name}</h1>
            <p>{speaker.tech}</p>
          </div>
        </div>
      </ModalHeader>
      <ModalBody className={styles.modal_body}>
        <h2>{speaker.title}</h2>
        <p>{speaker.topic}</p>

        <h2>Mini bio</h2>
        <p>{speaker.mini_bio}</p>
      </ModalBody>
      <ModalFooter className={styles.modal_footer}>
        {speaker.social_media && (
          <>
            {speaker.social_media.twitter && (
              <a target="_blank" href={speaker.social_media.twitter} rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            )}
            {speaker.social_media.instagram && (
              <a target="_blank" href={speaker.social_media.instagram} rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            )}
            {speaker.social_media.github && (
              <a target="_blank" href={speaker.social_media.github} rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            )}
            {speaker.social_media.linkedIn && (
              <a target="_blank" href={speaker.social_media.linkedIn} rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            )}
            {speaker.social_media.website && (
              <a target="_blank" href={speaker.social_media.website} rel="noreferrer">
                <FontAwesomeIcon icon={faArrowPointer} size="2x" />
              </a>
            )}
          </>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default SpeakerModal;
