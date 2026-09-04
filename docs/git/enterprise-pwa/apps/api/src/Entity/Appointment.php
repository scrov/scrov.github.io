<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Appointment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private string $customerName;

    #[ORM\Column(length: 255)]
    private string $customerEmail;

    #[ORM\Column(length: 40)]
    private string $customerPhone;

    #[ORM\Column(length: 100)]
    private string $service;

    #[ORM\Column]
    private \DateTimeImmutable $scheduledAt;

    #[ORM\Column(length: 30)]
    private string $status = 'pending';

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCustomerName(): string
    {
        return $this->customerName;
    }

    public function setCustomerName(string $value): self
    {
        $this->customerName = $value;
        return $this;
    }

    public function getCustomerEmail(): string
    {
        return $this->customerEmail;
    }

    public function setCustomerEmail(string $value): self
    {
        $this->customerEmail = $value;
        return $this;
    }

    public function getCustomerPhone(): string
    {
        return $this->customerPhone;
    }

    public function setCustomerPhone(string $value): self
    {
        $this->customerPhone = $value;
        return $this;
    }

    public function getService(): string
    {
        return $this->service;
    }

    public function setService(string $value): self
    {
        $this->service = $value;
        return $this;
    }

    public function getScheduledAt(): \DateTimeImmutable
    {
        return $this->scheduledAt;
    }

    public function setScheduledAt(\DateTimeImmutable $value): self
    {
        $this->scheduledAt = $value;
        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $value): self
    {
        $this->status = $value;
        return $this;
    }
}
