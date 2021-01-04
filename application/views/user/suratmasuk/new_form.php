<!DOCTYPE html>
<html lang="en">

<head>
	<?php $this->load->view("user/_partials/head_demo.php") ?>
</head>

<body id="page-top">

	<?php $this->load->view("user/_partials/navbar_demo.php") ?>
	<div id="wrapper">

		<?php $this->load->view("user/_partials/sidebar.php") ?>

		<div id="content-wrapper">

			<div class="container-fluid">

				<?php $this->load->view("user/_partials/breadcrumb.php") ?>

				<?php if ($this->session->flashdata('success')): ?>
				<div class="alert alert-success" role="alert">
					<?php echo $this->session->flashdata('success'); ?>
				</div>
				<?php endif; ?>

				<div class="card mb-3">
					<div class="card-header">
						<a href="<?php echo site_url('user/suratmasuk/') ?>"><i class="fas fa-arrow-left"></i> Back</a>
					</div>
					<div class="card-body">

						<form action="<?php echo site_url('user/suratmasuk/add') ?>" method="post" enctype="multipart/form-data" >
							<div class="form-group">
								<label for="nourut">Nomor urut*</label>
								<input class="form-control <?php echo form_error('nourut') ? 'is-invalid':'' ?>"
								 type="text" name="nourut" placeholder="nomor urut saat ini" />
								<div class="invalid-feedback">
									<?php echo form_error('nourut') ?>
								</div>
							</div>

							<div class="form-group">
								<label for="noberkas">Nomor Berkas*</label>
								<input class="form-control <?php echo form_error('noberkas') ? 'is-invalid':'' ?>"
								 type="text" name="noberkas" min="0" placeholder="masukan nomor dan tanggal surat diputuskan" />
								<div class="invalid-feedback">
									<?php echo form_error('noberkas') ?>
								</div>
                            </div>
                            
                            <div class="form-group">
								<label for="alamatpengirim">Alamat Pengirim*</label>
								<input class="form-control <?php echo form_error('alamatpengirim') ? 'is-invalid':'' ?>"
								 type="text" name="alamatpengirim" min="0" placeholder="masukan tentang surat" />
								<div class="invalid-feedback">
									<?php echo form_error('alamatpengirim') ?>
								</div>
							</div>

                            
                            <div class="form-group">
								<label for="tanggalmasuk">Tanggal*</label>
								<input class="form-control <?php echo form_error('tanggalmasuk') ? 'is-invalid':'' ?>"
								 type="date" name="tanggalmasuk" min="0" placeholder="masukan Nomor & Tanggal surat Dilaporkan" />
								<div class="invalid-feedback">
									<?php echo form_error('tanggalmasuk') ?>
								</div>
                            </div>

                            <div class="form-group">
								<label for="perihalmasuk">Perihal*</label>
								<input class="form-control <?php echo form_error('perihalmasuk') ? 'is-invalid':'' ?>"
								 type="text" name="perihalmasuk" min="0" placeholder="masukan keterangan surat" />
								<div class="invalid-feedback">
									<?php echo form_error('perihalmasuk') ?>
								</div>
							</div>

							<div class="form-group">
								<label for="berkasmasuk"><Photo>Berkas Surat file pdf*</Photo></label>
								<input class="form-control <?php echo form_error('berkasmasuk') ? 'is-invalid':'' ?>"
								 type="file" name="berkasmasuk" />
								<div class="invalid-feedback">
									<?php echo form_error('berkasmasuk') ?>
								</div>
							</div>
							

							

							<input class="btn btn-success" type="submit" name="btn" value="Save" />
						</form>

					</div>

					<div class="card-footer small text-muted">
						* required fields
					</div>


				</div>
				<!-- /.container-fluid -->

				<!-- Sticky Footer -->
				<?php $this->load->view("user/_partials/footer_demo.php") ?>

			</div>
			<!-- /.content-wrapper -->

		</div>
		<!-- /#wrapper -->


		<?php $this->load->view("user/_partials/scrolltop.php") ?>

		<?php $this->load->view("user/_partials/js.php") ?>

</body>

</html>