<?php

namespace App\Filament\Resources\HomeInfoResource\Pages;

use App\Filament\Resources\HomeInfoResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditHomeInfo extends EditRecord
{
    protected static string $resource = HomeInfoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
