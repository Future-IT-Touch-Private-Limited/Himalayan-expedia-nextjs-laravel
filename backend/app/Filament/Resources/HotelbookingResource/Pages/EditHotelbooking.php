<?php

namespace App\Filament\Resources\HotelbookingResource\Pages;

use App\Filament\Resources\HotelbookingResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHotelbooking extends EditRecord
{
    protected static string $resource = HotelbookingResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
