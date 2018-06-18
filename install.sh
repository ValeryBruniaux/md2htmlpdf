#!/bin/sh

echo "================================================"
echo "==> Install bin file in /usr/bin/"
echo "================================================"

sudo cp md2htmlpdf /usr/bin/
sudo chmod 755 /usr/bin/md2htmlpdf

echo "================================================"
echo "==> Install config dir in ~/.config/md2htmlpdf/"
echo "================================================"

mkdir $HOME/.config/md2htmlpdf
cp -R -i css $HOME/.config/md2htmlpdf/
cp -R -i templates $HOME/.config/md2htmlpdf/

echo "================================================"
echo "==> Install completed ..."
echo "================================================"
